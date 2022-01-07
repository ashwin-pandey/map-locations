export class Location {
    private location: string;
    private latitude: number;
    private longitude: number;

    constructor(location: string, latitude: number, longitude: number) {
        this.location = location;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}