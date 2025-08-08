import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknown Action");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, currentCity, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // Load cities from localStorage on mount
  useEffect(() => {
    dispatch({ type: "loading" });
    try {
      const stored = localStorage.getItem("cities");
      const data = stored ? JSON.parse(stored) : [];
      dispatch({ type: "cities/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading the data ❌...",
      });
    }
  }, []);

  // Get city by id from localStorage
  const getCity = useCallback(
    async (id) => {
      if (Number(id) === currentCity.id) return;
      dispatch({ type: "loading" });
      try {
        const stored = localStorage.getItem("cities");
        const data = stored ? JSON.parse(stored) : [];
        const city = data.find((c) => c.id === Number(id));
        dispatch({ type: "city/loaded", payload: city || {} });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading the city data ❌...",
        });
      }
    },
    [currentCity.id]
  );

  // Add a new city to localStorage
  const createCity = async (newCity) => {
    dispatch({ type: "loading" });
    try {
      const stored = localStorage.getItem("cities");
      const data = stored ? JSON.parse(stored) : [];
      // Assign a unique id if not present
      const id = newCity.id || Date.now();
      const city = { ...newCity, id };
      const updated = [...data, city];
      localStorage.setItem("cities", JSON.stringify(updated));
      dispatch({ type: "city/created", payload: city });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error creating the city ❌...",
      });
    }
  };

  // Delete city from localStorage
  const deleteCity = async (id) => {
    dispatch({ type: "loading" });
    try {
      const stored = localStorage.getItem("cities");
      const data = stored ? JSON.parse(stored) : [];
      const updated = data.filter((city) => city.id !== id);
      localStorage.setItem("cities", JSON.stringify(updated));
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting city ❌...",
      });
    }
  };

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        getCity,
        currentCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("CitiesContext was used outside the Cities Provider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };
