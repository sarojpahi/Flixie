import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}
  movieData: any;
  video: any;
  cast: any = [];
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovieData(getParamId);
    this.getVideoData(getParamId);
    this.getCastoData(getParamId);
  }

  getMovieData(id: any) {
    this.service.getMovieApiData(id).subscribe((res) => {
      console.log(res, 'movieVideoData');
      this.movieData = res;
    });
  }
  getVideoData(id: any) {
    this.service.getMovieVideoApiData(id).subscribe((res) => {
      console.log(res, 'movieVideoData');
      res.results.forEach((el: any) => {
        if (el.type === 'Trailer') this.video = el.key;
      });
    });
  }
  getCastoData(id: any) {
    this.service.getMovieCastApiData(id).subscribe((res) => {
      console.log(res, 'CastData');
      this.cast = res.cast;
    });
  }
}
