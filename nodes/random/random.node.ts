// ARQUIVO: random.node.ts

// Importa as interfaces e tipos essenciais da biblioteca do n8n para a criação de nodes.
import { IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow';

/**
 * Define a classe principal para o node.
 * O nome da classe, 'random', corresponde ao que o n8n espera carregar.
 */
export class random implements INodeType {
    /**
     * O objeto 'description' contém todas as informações
     * que o n8n utiliza para renderizar o node na interface do usuário (UI).
     */
    description: INodeTypeDescription = {
        displayName: 'Random',
        name: 'random',
        icon: 'file:dice_icon.svg', // Retirado de https://www.svgrepo.com/svg/360333/dice-f
        group: ['transform'],
        version: 1,
        description: 'Gera um número aleatório usando a API do Random.org',
        defaults: {
            // Nome padrão do node quando ele é arrastado para o workflow.
            name: 'True Random Number Generator',
        },
        // Define que o node tem uma entrada e uma saída principal para se conectar a outros nodes.
        inputs: ['main'],
        outputs: ['main'],

        /**
         * A lista 'properties' define os campos que o usuário
         * verá no painel de configurações do node para inserir os dados.
         */
        properties: [
            // --- Campo de Entrada: Mínimo ---
            {
                displayName: 'Min',
                name: 'min',
                type: 'number',
                default: 1,
                required: true,
                description: 'O valor inteiro mínimo para o sorteio (inclusivo)',
            },
            // --- Campo de Entrada: Máximo ---
            {
                displayName: 'Max',
                name: 'max',
                type: 'number',
                default: 100,
                required: true,
                description: 'O valor inteiro máximo para o sorteio (inclusivo)',
            },
        ],
    };

    /**
     * O método 'execute' contém a lógica que será executada quando o node for ativado no workflow.
     */
    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        // 1. Obtém os valores dos campos 'min' e 'max' preenchidos pelo usuário na interface.
        const min = this.getNodeParameter('min', 0) as number;
        const max = this.getNodeParameter('max', 0) as number;

        // 2. Constrói a URL da API do Random.org dinamicamente com os valores de min e max.
        const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

        // 3. Executa a requisição HTTP GET para a API usando o helper do n8n.
        // O 'await' pausa a execução aqui até que a resposta da API seja recebida.
        const responseData = await this.helpers.httpRequest({
            method: 'GET',
            url: url,
            json: false,
        });

        // 4. Converte a resposta da API (que é um texto) para um número inteiro.
        const randomNumber = parseInt(responseData as string, 10);

        // 5. Prepara os dados de saída no formato padrão que o n8n espera,
        // para que possam ser utilizados por outros nodes no workflow.
        const returnData = [{
            json: {
                // O resultado é encapsulado em um objeto JSON com uma chave 'randomNumber'.
                randomNumber: randomNumber,
            }
        }];

        // 6. Retorna os dados formatados usando a função auxiliar do n8n.
        return this.prepareOutputData(returnData);
    }
}