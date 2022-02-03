import { exportAllDeclaration, isTaggedTemplateExpression } from '@babel/types';
import Block from './block';
import Blockchain from './blockchain';

describe('Blockchain', () => {
    let blockchain;

    beforeEach(() => {
        blockchain = new Blockchain();
    });
    it('Toda la cadena tendrá un bloque genesis', () => {
        const [genesisBlock] = blockchain.blocks;

        expect(genesisBlock).toEqual(Block.genesis);
        expect(blockchain.blocks.length).toEqual(1);
    });

    it('Validar que se agregan bloques', () => {
        const data = 'd4ata';
        blockchain.addBlock(data);

        const[, lastBlock] = blockchain.blocks;
        expect(lastBlock.data).toEqual(data);
        expect(blockchain.blocks.length).toEqual(2);
    });
});