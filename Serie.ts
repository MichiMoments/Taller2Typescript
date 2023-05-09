export class Serie
{
    number: number;
    name: string;
    channel: string;
    seasons: number;
    summary: string;
    web: string;
    image: string;
  
    constructor(number: number,name: string, channel: string, seasons: number,summary: string, web: string,image: string) 
    {
        this.number = number;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.summary = summary;
        this.web = web;
        this.image = image;
    }
}