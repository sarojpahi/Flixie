import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private service: MovieApiServiceService) {}

  searchData: any = [];
  isButtonDisabled: boolean = false;
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });
  submitForm() {
    this.isButtonDisabled = true;
    this.service
      .searchMovieApiData(this.searchForm.value.movieName)
      .subscribe((res) => {
        this.searchData = res.results;
        this.isButtonDisabled = false;
      });
  }
}
