import Block from '../block';

export default (blockchain) => {
    const [genesisBlock, ...blocks] = blockchain;

    if (JSON.stringify(genesisBlock) !== JSON.stringify(Block.genesis)) throw Error('Bloque Genesis Invalido');

    for (let i = 0; i < blocks.length; i +=1)
    {
        const {
            previousHash, timestamp, hash, data, nonce, difficulty,
        } = blocks[i];
        const previousBlock = blockchain[i];

        if (previousHash !== previousBlock.hash) throw Error('El Previous hash es invalido');
        if (hash !== Block.hash(timestamp,previousHash,data, nonce, difficulty)) throw Error('Hash invalido');
    }

    return true;
};