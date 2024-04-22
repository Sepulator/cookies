import {Component, HostListener} from '@angular/core';
import {Product} from "../assets/products";
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  protected currency: string = '$';

  protected productsData: Product[] = [];

  protected loader = true;

  protected loaderShowed = true;

  protected mainImageStyle: Record<string, string> = {};
  protected orderImageStyle: Record<string, string> = {};

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mainImageStyle = {transform: `translate(${(e.clientX * 0.3) / 8}px, ${(e.clientY * 0.3) / 8}px)`};
    this.orderImageStyle = {transform: `translate(-${(e.clientX * 0.3) / 8}px, -${(e.clientY * 0.3) / 8}px)`};
  }

  form = this.fb.group({
    product: ['', Validators.required],
    name: ['', Validators.required],
    phone: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loaderShowed = false;
    }, 2000);

    setTimeout(() => {
      this.loader = false;
    }, 3000);
    this.http.get<Product[]>('https://testologia.ru/cookies')
      .subscribe(data => this.productsData = data);
  }

  switchSugarFree(e: Event) {
    this.http.get<Product[]>("https://testologia.ru/cookies" + ((e.currentTarget as HTMLInputElement).checked ? '?sugarfree' : ''))
      .subscribe(data => this.productsData = data);
  }

  scrollTo(target: HTMLElement, product?: Product): void {
    target.scrollIntoView({behavior: 'smooth'});
    if (product) {
      this.form.patchValue({product: product.title + ' (' + product.price + ' ' + this.currency + ')'});
    }
  }

  changeCurrency() {
    let newCurrency = "$";
    let coefficient = 1;

    switch (this.currency) {
      case "$":
        newCurrency = "₽";
        coefficient = 90;
        break;
      case "₽":
        newCurrency = "BYN";
        coefficient = 3;
        break;
      case "BYN":
        newCurrency = '€';
        coefficient = 0.9;
        break;
      case "€":
        newCurrency = '¥';
        coefficient = 6.9;
        break;
    }

    this.currency = newCurrency;

    this.productsData.forEach((item) => {
      item.price = Number((item.basePrice * coefficient).toFixed());
    });
  }

  confirmOrder() {
    if (this.form.valid) {
      this.http.post("https://testologia.ru/cookies-order", this.form.value)
        .subscribe({
          next: (response: any) => {
            alert(response.message);
            this.form.reset();
          },
          error: (response: any) => {
            alert(response.error.message);
          },
        });
    }
  }
}
