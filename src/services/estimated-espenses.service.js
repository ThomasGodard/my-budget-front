
import { fromPromise } from 'rxjs/internal/observable/innerFrom'
import httpClient from '../config/http-client'
import { map } from 'rxjs/operators'


export const fetchEstimatedExpenses = () => {
  const requestPromise = httpClient.get('/estimated-transactions')
  return fromPromise(requestPromise).pipe(
    map(({ data }) => data)
  )
}
