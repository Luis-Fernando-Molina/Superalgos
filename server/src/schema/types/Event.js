import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLID,
} from 'graphql';
import {
  FormulaType,
  PlotterType,
  RuleType,
  ParticipantType,
  PrizeType,
} from './index';
import EventStatusEnumType from './enum/EventStatus';

const EventType = new GraphQLObjectType({
  name: 'Event',
  description: 'Everything you need to know about an event',
  fields: () => ({
    id: { type: GraphQLID },
    status: { type: EventStatusEnumType },
    name: { type: GraphQLString },
    hostId: { type: GraphQLString },
    description: { type: GraphQLString },
    startDatetime: { type: GraphQLInt },
    finishDatetime: { type: GraphQLInt },
    formula: {
      type: FormulaType,
      resolve(parent) {
        return parent.formulaId;
      },
    },
    plotter: {
      type: PlotterType,
      resolve(parent) {
        return parent.plotterId;
      },
    },
    rules: {
      type: new GraphQLList(RuleType),
      resolve(parent) {
        return parent.rules;
      },
    },
    participants: {
      type: new GraphQLList(ParticipantType),
      resolve(parent) {
        return parent.participants;
      },
    },
    prizes: {
      type: new GraphQLList(PrizeType),
      resolve(parent) {
        return parent.prizes;
      },
    },
  }),
});

export default EventType;
