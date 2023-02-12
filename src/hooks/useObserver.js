import {useEffect} from "react";
import {useRef} from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef()

  useEffect(() => {
    if(isLoading) return;
    if(observer.current) observer.current.disconnect()
    let cb = (entries, observer) => {
      if(entries[0].isIntersecting && canLoad){
        // console.log('div is here')
        // console.log(page)
        callback()
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current)
  }, [isLoading])
}