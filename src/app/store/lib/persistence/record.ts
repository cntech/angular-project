import RecordMetaData from './record-meta-data'

class Record<MDT extends RecordMetaData, DT> {
  constructor(public metaData: MDT, public data: DT) {}
}
