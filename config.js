import * as param from '@jkcfg/std/param';
import { generate } from 'cluster-components/@wkp-cluster-components';

const config = param.Object('config');

export default generate(config);
