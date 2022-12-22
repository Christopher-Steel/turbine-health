import create from 'zustand';
import TurbineState from './types/TurbineState';

interface TurbineHealthState {
    turbines: TurbineState[];
    updateTurbineWarnings: (targetId: string, warnings: number) => void;
    updateTurbineCriticals: (targetId: string, criticals: number) => void;
    initialise: (amount: number) => void;
};

export const useStore = create<TurbineHealthState>(set => ({
    turbines: [],
    updateTurbineWarnings: (targetId: string, warnings: number) => {
        set((state) => ({
            turbines: state.turbines.map((turbine) => {
                const { id, criticals } = turbine
                return id === targetId
                    ? {id, warnings, criticals}
                    : turbine
            })
        }));
    },
    updateTurbineCriticals: (targetId: string, criticals: number) => {
        set((state) => ({
            turbines: state.turbines.map((turbine) => {
                const { id, warnings } = turbine;
                return targetId === id
                    ? {id, warnings, criticals}
                    : turbine
            })
        }));
    },
    initialise: (amount: number) => {
        set((state) => ({
            turbines: Array.from({ length: amount }).map((_, idx) => (
                {id: "T" + (idx + 1), warnings: 0, criticals: 0}
            ))
        }));
    }
}));
