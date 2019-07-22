import { Component } from '@angular/core';

interface Place {
  img: string;
  address: string;
  phone: number;
  weather: {
     title: string;
     icon: string;
     water: number;
     temperature: number;
  };
  social_info: {
     title: string;
     img: string;
     followers: number;
     following: number;
  };
  type: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: Place[] = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Moscow-City2015.jpg/405px-Moscow-City2015.jpg',
      address: 'РФ Москва столица',
      phone: 89112223301,
      weather: {
         title: 'Солнечно',
         icon: '../assets/img/sun.svg',
         water: 15,
         temperature: 20,
      },
      social_info: {
         title: 'Instagram',
         // tslint:disable-next-line:max-line-length
         img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-st1.rtr-vesti.ru%2Fp%2Fxw_1446621.jpg&imgrefurl=https%3A%2F%2Fwww.vesti.ru%2Fdoc.html%3Fid%3D3132347&docid=9E_6B-C8Vq25WM&tbnid=ONNeCxWYN8JFgM%3A&vet=10ahUKEwjtv4SSwrvjAhVlkIsKHZYyBU0QMwhVKAMwAw..i&w=720&h=409&bih=881&biw=1745&q=instagram&ved=0ahUKEwjtv4SSwrvjAhVlkIsKHZYyBU0QMwhVKAMwAw&iact=mrc&uact=8',
         followers: 1000,
         following: 90,
      },
      type: 'Москва',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Moscow-City2015.jpg/405px-Moscow-City2015.jpg',
      address: 'РФ Москва столица',
      phone: 89112223301,
      weather: {
         title: 'Солнечно',
         icon: '',
         water: 15,
         temperature: 20,
      },
      social_info: {
         title: 'Instagram',
         // tslint:disable-next-line:max-line-length
         img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-st1.rtr-vesti.ru%2Fp%2Fxw_1446621.jpg&imgrefurl=https%3A%2F%2Fwww.vesti.ru%2Fdoc.html%3Fid%3D3132347&docid=9E_6B-C8Vq25WM&tbnid=ONNeCxWYN8JFgM%3A&vet=10ahUKEwjtv4SSwrvjAhVlkIsKHZYyBU0QMwhVKAMwAw..i&w=720&h=409&bih=881&biw=1745&q=instagram&ved=0ahUKEwjtv4SSwrvjAhVlkIsKHZYyBU0QMwhVKAMwAw&iact=mrc&uact=8',
         followers: 1000,
         following: 90,
      },
      type: 'Москва',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Moscow-City2015.jpg/405px-Moscow-City2015.jpg',
      address: 'РФ Москва столица',
      phone: 89112223301,
      weather: {
         title: 'Солнечно',
         icon: '',
         water: 15,
         temperature: 20,
      },
      social_info: {
         title: 'Instagram',
         // tslint:disable-next-line:max-line-length
         img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-st1.rtr-vesti.ru%2Fp%2Fxw_1446621.jpg&imgrefurl=https%3A%2F%2Fwww.vesti.ru%2Fdoc.html%3Fid%3D3132347&docid=9E_6B-C8Vq25WM&tbnid=ONNeCxWYN8JFgM%3A&vet=10ahUKEwjtv4SSwrvjAhVlkIsKHZYyBU0QMwhVKAMwAw..i&w=720&h=409&bih=881&biw=1745&q=instagram&ved=0ahUKEwjtv4SSwrvjAhVlkIsKHZYyBU0QMwhVKAMwAw&iact=mrc&uact=8',
         followers: 1000,
         following: 90,
      },
      type: 'Москва',
    }
  ];
}
