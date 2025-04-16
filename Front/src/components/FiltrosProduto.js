import { useState } from "react";
import {Button, Input, Select} from "../styles/styledConsts";

function FiltroProdutos({ onFiltrar }) {
    const [filtros, setFiltros] = useState({
      nome: '',
      tipo: '',
      precoMin: '',
      precoMax: '',
      estoqueMin: '',
    });
  
    const handleChange = (e) => {
      setFiltros({ ...filtros, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onFiltrar(filtros);
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
        <Input
          type="text"
          name="nome"
          placeholder="Buscar por nome"
          value={filtros.nome}
          onChange={handleChange}
        />
  
        <Select name="tipo" value={filtros.tipo} onChange={handleChange}>
          <option value="">Todas categorias</option>
          <option value="comida">Comida</option>
          <option value="bebida">Bebida</option>
          
        </Select>
  
        <div>
          <Input
            type="number"
            name="precoMin"
            placeholder="Preço mínimo"
            value={filtros.precoMin}
            onChange={handleChange}
          />
          <Input
            type="number"
            name="precoMax"
            placeholder="Preço máximo"
            value={filtros.precoMax}
            onChange={handleChange}
          />
        </div>
  
        <Input
          type="number"
          name="estoqueMin"
          placeholder="Estoque mínimo"
          value={filtros.estoqueMin}
          onChange={handleChange}
        />
  
        <Button type="submit">Filtrar</Button>
      </form>
    );
  };

  export default FiltroProdutos;