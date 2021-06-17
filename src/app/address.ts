export class Address {
    baseAdd = 'http://localhost:4200';
    assets = './assets/image/';
    assetsI = './assets/article/';

    // Add = 'http://localhost/jabonline.in/';
    // pdfPath = 'http://localhost/jabonline.in/admin/php/uploads/';
    // pdfPath2 = 'http://localhost/jabonline.in/admin/php/uploadss/';
    // imagesPath = 'http://localhost/jabonline.in/cms/php/images/';

    Add = (location.origin === 'http://localhost:4200' || location.origin === 'http://localhost:4000') ? 'https://jabonline.in/' : location.origin + '/';
    pdfPath = this.Add+'admin/php/uploads/';
    pdfPath2 = this.Add+'admin/php/uploadss/';
    imagesPath = this.Add+'cms/php/images/';

    
}