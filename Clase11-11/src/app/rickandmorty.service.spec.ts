import { TestBed } from '@angular/core/testing';
import { RickandmortyService } from './rickandmorty.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


describe('RickandmortyService', () => {
  let service: RickandmortyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(RickandmortyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return a Morty when you call obtenerunPersonaje(2)', (done:DoneFn)=> {
    const id= 2;
    service.obtenerunPersonaje(id).subscribe((morty)=>{
      console.log(morty);
      expect(morty.name).toBe('Morty Smith');
      done();
    })
  });


});
