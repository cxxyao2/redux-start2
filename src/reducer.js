let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case "bugAddded":
      if (state && state.length > 0) {
        let newState = [...state];
        newState.push({
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        });
        return newState;
      } else {
        return [
          {
            id: ++lastId,
            description: action.payload.description,
            resolved: false,
          },
        ];
      }
    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.payload.id);
    case "bugResolved":
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
