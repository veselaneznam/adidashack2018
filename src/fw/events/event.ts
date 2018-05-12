export interface IEvent {
  eventId: number;
  eventName: string;
  isLive: boolean;
  imgSrc: string;
}

export interface ILiveFeed {
  feedType: string;
  feedImage: string;
}

export interface IFanFeed {
  feedType: string;
  feedImage: string;
  points: number;
}
