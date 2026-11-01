import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FloorDto } from './floor.model';

@Service()
export class FloorService
{
    private readonly http = inject(HttpClient);

    // Relative "/api" is set in...
    //      Without Docker: "proxy.conf.json"
    //      With Docker: "nginx.conf"
    private readonly apiUrl = '/api/floor'; 

    getFloors(): Observable<FloorDto[]>
    {
        return this.http.get<FloorDto[]>(this.apiUrl);
    }
}
