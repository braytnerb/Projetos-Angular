import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [

 {
  path: '',
  pathMatch: 'full',
  redirectTo: 'listarPensamentos'
 },
 {
  path: 'criarPensamento',
  component: CriarPensamentoComponent
 },

 {
  path: 'listarPensamentos',
  component: ListarPensamentosComponent
 },

{
  path: 'pensamentos/excluirPensamento/:id',
  component: ExcluirPensamentoComponent
},
{
  path: 'pensamentos/editarPensamento/:id',
  component: EditarPensamentoComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
