import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService) {}

  bannerApiData: any = [];
  trendingMovieApiData: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingMovieData();
  }
  bannerData() {
    this.service.bannerApiData().subscribe((res) => {
      this.bannerApiData = res.results;
    });
  }
  trendingMovieData() {
    this.service.trendingMovieApiData().subscribe((res) => {
      this.trendingMovieApiData = res.results;
    });
  }
}
