enum ModeEnum {
    'PIN',
    'NORMAL'
}

enum StatusEnum {
    'ACTIVE',
    'ARCHIVED',
    'TRASHED',
    'DELETED'
}

export interface INote {
  title: string;
  content: string;
  mode: ModeEnum;
  color: string,
  label: [string],
  images: [string],
  status: StatusEnum;
  status_time: Date;
  creator: string;
  _updatedAt: Date;
}
