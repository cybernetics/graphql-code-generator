import { GeneratorConfig } from '../types';
import * as index from './template.handlebars';
import * as type from './type.handlebars';
import * as schema from './schema.handlebars';
import * as documents from './documents.handlebars';
import * as selectionSet from './selection-set.handlebars';

const config: GeneratorConfig = {
  singleFile: true,
  templates: {
    index,
    type,
    schema,
    documents,
    selectionSet,
  },
  flattenTypes: true,
  primitives: {
    String: 'string',
    Int: 'number',
    Float: 'number',
    Boolean: 'boolean',
    ID: 'string'
  },
  out: 'types.d.ts',
};

export default config;