import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Home() {
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const [cnaes, setCnaes] = useState([]);

  const onSubmit = (e) => {
    console.log(e);
  };

  const checkCNPJ = (e) => {
    if (!e.target.value) {
      return;
    }
    const cnpj = e.target.value.replace(/[^\d]+/g, "");
    fetch(`http://localhost:3000/api/cnpj?cnpj=${cnpj}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setValue("name", res.nome);
        setValue("address", res.logradouro);
        setValue("addressNumber", res.numero);
        setValue("addressAdditionalInfo", res.complemento);
        setValue("neighborhood", res.bairro);
        setValue("city", res.municipio);
        setValue("uf", res.uf);
        setValue("cep", res.cep);
        setValue("situation", res.situacao);
        const _cnaes = [
          ...res.atividade_principal,
          ...res.atividades_secundarias,
        ];
        setCnaes(_cnaes);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        CNPJ:
        <input type="text" {...register("cnpj")} onBlur={checkCNPJ} />
      </label>
      <label>
        Razão Social:
        <input type="text" {...register("name")} />
      </label>
      <label>
        Rua:
        <input type="text" {...register("address")} />
      </label>
      <label>
        Número:
        <input type="text" {...register("addressNumber")} />
      </label>
      <label>
        Complemento:
        <input type="text" {...register("addressAdditionalInfo")} />
      </label>
      <label>
        Bairro:
        <input type="text" {...register("neighborhood")} />
      </label>
      <label>
        Cidade:
        <input type="text" {...register("city")} />
      </label>
      <label>
        Estado:
        <input type="text" {...register("uf")} />
      </label>
      <label>
        CEP:
        <input type="text" {...register("cep")} />
      </label>
      <label>
        Situação:
        <input type="text" {...register("situation")} />
      </label>
      <label>
        CNAEs:
        <div>
          {cnaes.length > 0
            ? cnaes.map((cnae, index) => (
                <div key={index}>
                  {cnae.code} | {cnae.text}
                </div>
              ))
            : "-"}
        </div>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
