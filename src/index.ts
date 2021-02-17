import * as bip39 from 'bip39';
import crypto from 'crypto';

// defaults to BIP39 English word list
// uses HEX strings for entropy
const mnemonic = bip39.entropyToMnemonic(
  crypto.randomBytes(32).toString('hex')
);

console.log(mnemonic);
