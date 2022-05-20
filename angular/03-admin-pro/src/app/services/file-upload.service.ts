import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor() {}

  async updatePhoto(
    file: File,
    type: 'users' | 'doctors' | 'hospitals',
    id: string
  ) {
    try {
      const url = `${base_url}/uploads/${type}/${id}`;
      const formData = new FormData();
      formData.append('image', file);

      const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token') || '', // para que el servidor sepa que es una peticion de angular
        },
        body: formData,
      });

      const data = await resp.json();

      return 'success';
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
