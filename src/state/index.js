import t from 'tcomb';

const State = t.struct({
    title: t.String
}, {
    name: 'State',
    strict: true
});

export default State;
