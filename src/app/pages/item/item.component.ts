import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDesc } from '../../interfaces/producto-desc.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto: ProductoDesc;
  id: string;
  cargando = true;

  constructor( private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit() {

    this.route.params
        .subscribe( parametros => {
          this.productoService.getProducto(parametros.id)
              .subscribe( (producto: ProductoDesc) => {
                this.producto = producto;
                this.id = parametros.id;
                this.cargando = false;
              });
        });
  }

}
