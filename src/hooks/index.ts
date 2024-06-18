import { useDispatch as useDispatchRedux, useSelector as useSelectorRedux } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState, useCallback, useId, useLayoutEffect, memo } from 'react'
import { twMerge } from 'tailwind-merge'

import type { AppDispatch, AppState } from '@libs/redux-store'
import useDebounce from './useDebounce'

const useSelector = useSelectorRedux.withTypes<AppState>()
const useDispatch = useDispatchRedux.withTypes<AppDispatch>()

/** A hook to select system state from the Redux store. */
const useSystemSelector = () => useSelector(state => state.system)

export {
  useTranslation,
  useEffect,
  useRef,
  useState,
  useCallback,
  useId,
  useLayoutEffect,
  memo,
  twMerge,
  useDebounce,
  useSelector,
  useDispatch,
  useSystemSelector,
}
