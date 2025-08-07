import { useEffect, useState } from "react"

const API_ENDPOINT = 'https://hacker-news.firebaseio.com/v0'
const ITEM_PER_PAGE = 5

type JOB_DETAIL = {id: number, title: string, time: number, by: string, url: string}

const JobBoard = () => {
  const [jobIds, setJobIds] = useState(null)
  const [jobList, setJobList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  const getJobStories = async (page: number) => {
    setCurrentPage(page)
    setIsLoading(true)

    let ids = jobIds
    if(ids === null) {
      const response = await fetch(`${API_ENDPOINT}/jobstories.json`)
      ids = await response.json()
      setJobIds(ids)
    }

    if(typeof(ids) === 'object') {
      const currentPageIds = ids?.slice(page*ITEM_PER_PAGE, page * ITEM_PER_PAGE + ITEM_PER_PAGE)

      //
      if(currentPageIds?.length) {
        const detail = await Promise.all(
          currentPageIds.map((id: number) => fetch(`${API_ENDPOINT}/item/${id}.json`).then(res => res.json()))
        )
    
        setJobList([...jobList, ...detail])
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    if (!currentPage) getJobStories(currentPage)
  }, [])

  return (
    <div className=''>
      <h1 className='text-2xl text-orange-500 font-bold'>Hacker News Jobs Board</h1>
      {isLoading && <div>Loading...</div>}
      <div className='mt-10 mb-5 flex flex-col gap-4'>
        {jobList && jobList.map((row: JOB_DETAIL) => <JobTile key={row?.id} row={row} />)}
      </div>
      <button
        className="p-2 bg-orange-600 text-white rounded"
        disabled={isLoading || jobIds?.length < currentPage * ITEM_PER_PAGE + ITEM_PER_PAGE}
        onClick={() => getJobStories(currentPage+1)}
      >
        {isLoading ? 'Loading...' : 'Load more'}
      </button>
    </div>
  )
}

export default JobBoard

type JobTile = {
  row: JOB_DETAIL,
}

const JobTile = ({row}: JobTile) => {
  const formattedDate = new Date(row?.time*1000).toLocaleString()

  return (
    <div className="border-2 bg-white p-2">
      <h2 className='text-xl'>
        <a
          href={row?.url}
          target="_blank"
        >
          {row?.title}
        </a>
      </h2>
      <span>By {row?.by} - {formattedDate}</span>
    </div>
  )
}