import { create } from 'zustand';
import { BaseState, StoreConfig } from '../types/store';
import { storeManager } from './storeManager';

export function createStore<T extends BaseState>(config: StoreConfig<T>) {
  const store = create<T>((set, get) => {
    // Initialize state with metadata
    const initialState = {
      ...config.initialState,
      _metadata: {
        lastAccessed: Date.now(),
        lastUpdated: Date.now(),
        tabId: null,
        lastResetTab: null
      }
    };

    // Create wrapped set and get functions to handle metadata
    const wrappedSet = (state: Partial<T>) => {
      const currentState = get();
      set({
        ...currentState,
        ...state,
        _metadata: {
          ...currentState._metadata,
          lastUpdated: Date.now()
        }
      });
    };

    const wrappedGet = () => {
      const state = get();
      // Update lastAccessed in metadata
      set({
        ...state,
        _metadata: {
          ...state._metadata,
          lastAccessed: Date.now()
        }
      });
      return state;
    };

    // Initialize methods with wrapped set and get
    const methods = config.methods?.(wrappedSet, wrappedGet) || {};

    return {
      ...initialState,
      ...methods
    } as T;
  });

  // Register the store with the manager
  storeManager.registerStore(config.id, store, config);

  return store;
} 