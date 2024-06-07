import { useEffect, useMemo, useState } from "react";
import { QueryFunctionReturnType } from "../service/base.service";
import { AxiosError } from "axios";

type UseQueryFunc = { queryFunc: Function };

export const useQuery = <T>(option: UseQueryFunc) => {
  const { queryFunc } = option;
  const [state, setState] = useState<any>({
    pending: true,
    error: null,
    data: null,
  });

  // const {pending, error, data} = useMemo<{}>(() => {
  //   if (!state.pending) return;
  //   queryFunc
  //     .then((res) => {
  //       return {
  //         pending: false,
  //         data: res.data as T,
  //         error: res.error,
  //       };
  //     })
  //     .catch((error) => {
  //       return {
  //         pending: false,
  //         data: null,
  //         error,
  //       };
  //     });
  // }, [queryFunc])

  useEffect(() => {
    if (!state.pending) return;
    (queryFunc() as QueryFunctionReturnType)
      .then((res) => {
        setState({
          pending: false,
          data: res.data as T,
          error: res.error,
        });
      })
      .catch((error) => {
        setState({
          pending: false,
          data: null,
          error,
        });
      });
  }, [queryFunc, state]);

  return useMemo(() => state, [queryFunc, state]);
};
