export const formatDateTimeColumn = (value: any, lng = "pt-BR") => {
  return value.toLocaleDateString(lng, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hourCycle: "h24",
  });
};

//==============================================
export function compareDate(objeto1: any, objeto2: any) {
  return (
    Number(new Date(objeto1.deliveryDate)) -
    Number(new Date(objeto2.deliveryDate))
  );
}
//==============================================
export function dateFormat(date1: string) {
  const date = new Date(date1); // Cria um objeto Date com a data e hora atuais
  const day = date.getDate().toString().padStart(2, "0"); // Obtém o dia do mês (1-31) e preenche com 0 à esquerda, se necessário
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Obtém o mês (0-11) e adiciona 1 para exibir no formato de 1-12 e preenche com 0 à esquerda, se necessário
  const year = date.getFullYear().toString();

  // Formata a data no formato dd/mm/aaaa
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}
//==============================================
export function moneyFormat(value: number | any) {
  const numero = Number(value);
  return `R$ ${numero.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`.replace(".", ".");
}
