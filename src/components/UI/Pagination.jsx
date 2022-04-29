import React, {useEffect} from 'react';
import BtnFillC from "./BtnFillC";
import cls from "../../style/UI/Pagination.module.css";
import {useDispatch} from "react-redux";
import {getAction_setPage} from "../../store/pageReducer";

const Pagination = ({prtClass, countPages, view, current}) => {

  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getAction_setPage(1))
  }, [countPages])

  const pagesNum = []
  for (let i = 0; i < view; i++) {
    const push = i+current-(current-1)%view
    if(push>countPages) break
    pagesNum.push(push)
  }



  function next(){
    const nextPage = current + 1
    if(nextPage>countPages) return

    dispatch(getAction_setPage(nextPage))
  }

  function back(){
    const prevPage = current - 1
    if(prevPage<1) return

    dispatch(getAction_setPage(prevPage))
  }


  const styles = [cls.pagination]
  if(prtClass) styles.push(prtClass)

  return (
    <div className={styles.join(" ")}>
      <div className={cls.back}>
        <BtnFillC disabledBtn={current === 1} name="Назад" cb={back}/>
      </div>

      <div className={cls.pages}>

        {pagesNum.map(page=>
          <div key={page} className={page===current?  `${cls.pageNum} ${cls.selected}`  : cls.pageNum}>
            {page}
          </div>
        )}

      </div>

      <div className={cls.next}>
        <BtnFillC disabledBtn={current === countPages} name="Далее" cb={next}/>
      </div>
    </div>
  );
};

export default Pagination;