"use strict";

import { legacy_createStore } from "redux";
import calcReducer from './calcReducer';

export default legacy_createStore(calcReducer);
