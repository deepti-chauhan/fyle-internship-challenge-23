import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event when onSubmit is called', () => {
    spyOn(component.searchEvent, 'emit');

    component.searchInput = 'testUser';
    component.onSubmit();

    expect(component.searchEvent.emit).toHaveBeenCalledWith('testUser');
  });

  it('should reset searchInput after onSubmit is called', () => {
    component.searchInput = 'testUser';
    component.onSubmit();

    expect(component.searchInput).toEqual('');
  });
});
