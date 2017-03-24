import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let reports = [
    {
      id: 1,
      status: 1,
      severity: 1,
      module: 'AWS',
      comment: 'comment',
      title: 'AWS Report 3/17',
      date: 7,
    },
    {
      id: 2,
      status: 2,
      severity: 2,
      module: 'Security',
      comment: 'more comments',
      title: 'AWS Report 3/17',
      date: 7,
    },
    {
      id: 3,
      status: 2,
      severity: 2,
      module: ' Security',
      comment: 'more comments',
      title: 'Security Report 3/18',
      date: 7,
    }
    ];
    return {reports};
  }
}
