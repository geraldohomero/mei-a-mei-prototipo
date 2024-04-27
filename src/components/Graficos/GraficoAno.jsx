import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'


Chart.register(...registerables)
const GraficoAno = () => {
  const data = {
    labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    datasets: [
      {
        label: 'Despesas',
        data: [100, 1200, 300, 400, 500, 600, 0, 13, 82, 56, 80, 50],
        fill: false,
        borderColor: 'red',

      },
      {
        label: 'Receitas',
        data: [1200, 1100, 1000, 2477, 2341, 700, 600, 500, 400, 2000, 1600, 1200],
        fill: false,
        borderColor: '#b83dff',

      },
    ],
  }

  const options = {
    responsive: false,
    maintainAspectRatio: true,
  }

  return (
    <div >
      <h3>Controle Financeiro Ano</h3>
      <Line data={data} options={options} />
    </div>
  );

}
export default GraficoAno