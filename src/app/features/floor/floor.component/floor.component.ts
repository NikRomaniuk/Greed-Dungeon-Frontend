import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { FloorService } from '../floor.service';
import { FloorDto } from '../floor.model';

@Component({
  selector: 'app-floor',
  styleUrl: './floor.component.scss',
  templateUrl: './floor.component.html',
})
export class FloorComponent implements OnInit, OnDestroy
{
  private readonly floorService = inject(FloorService);
  private subscription?: Subscription;

  protected readonly floors = signal<FloorDto[]>([]);
  protected readonly isLoading = signal(false);
  protected readonly errorMessage = signal<string | null>(null);

  ngOnInit(): void
  {
    this.fetchFloors();
  }

  ngOnDestroy(): void
  {
    this.subscription?.unsubscribe();
  }

  private fetchFloors(): void
  {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.subscription = this.floorService.getFloors().subscribe({
      next: (data) => {
        this.floors.set(data);
        this.isLoading.set(false);
      },
      error: (error: unknown) => {
        console.error('Error fetching Floors:', error);
        this.errorMessage.set('Failed to load Floors');
        this.isLoading.set(false);
      },
    });
  }
}
