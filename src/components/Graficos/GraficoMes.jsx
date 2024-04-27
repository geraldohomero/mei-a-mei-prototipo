import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'

{ /* must have label Despesas and Receitas during all mounth (30...31 days)*/ }
Chart.register(...registerables)
const GraficoMes = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'], // 31 days
    datasets: [
      {
        label: 'Despesas',
        data: [100, 1200, 300, 400, 500, 600, 0, 13, 82, 56, 80, 50, 100, 1200, 300, 400, 500, 600, 0, 13, 82, 56, 80, 50, 100, 1200, 300, 400, 500, 600, 0],
        fill: false,
        borderColor: 'red',

      },
      {
        label: 'Receitas',
        data: [1200, 1100, 1000, 2477, 2341, 700, 600, 500, 400, 2000, 1600, 1200, 1200, 1100, 1000, 2477, 2341, 700, 600, 500, 400, 2000, 1600, 1200, 1200, 1100, 1000, 2477, 2341, 700],
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
      <h3>Controle Financeiro Mês</h3>
      <Line data={data} options={options} />
    </div >
  );

}
export default GraficoMes