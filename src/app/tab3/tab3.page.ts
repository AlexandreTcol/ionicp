import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  whats() {}

  send() {
    let name = this.form.get('name').value;
    let address = this.form.get('address').value;

    this.openUrl(
      `https://api.whatsapp.com/send?phone=555194904309&text=Ola%20me%20chamo%20${name}%20moro%20em%20${address}%20vim%20através%20do%20seu%20App,%20Gostaria%20de%20receber%20doações`
    );
  }

  openUrl(url: string) {
    window.open(url, '_blank').focus();
  }
}
