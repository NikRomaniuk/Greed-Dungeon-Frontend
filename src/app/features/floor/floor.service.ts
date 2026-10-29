import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FloorDto } from './floor.model';

@Service()
export class FloorService
{
    private readonly http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:8080/api/floor';

    getFloors(): Observable<FloorDto[]>
    {
        return this.http.get<FloorDto[]>(this.apiUrl);
    }
}
