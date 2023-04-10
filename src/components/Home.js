import React, { useEffect, useState } from 'react'
import QuoteBox from './quote-box'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Loader from './loader';

export default function Home() {

    const [tags, settags] = useState([]);
    const [selectedTag, setselectedTag] = useState(null);
    const [loading, setloading] = useState(false);

    const quote = useSelector(state => state.rootReducer.current);
    const dispatch = useDispatch();



    // function to get random quote 
    const getRandomQuote = async () => {

        setloading(true);

        try {

            const { data } = await axios.get('https://api.quotable.io/random');
            setloading(false);

            const newQuote = { _id: data._id, content: data.content, author: data.author };
            dispatch({ type: "SET", payload: newQuote });

            // console.log(quote);
        } catch (error) {
            console.log(error);
            setloading(false);
        }
    }

    //get on selected tag
    const handleSelectedTag = async (tag) => {

        if(tag===null) return;
        
        setselectedTag(tag);
        setloading(true);
        try {

            const { data } = await axios.get(`https://api.quotable.io/random?tags=${tag}`);
            setloading(false);

            const newQuote = { _id: data._id, content: data.content, author: data.author };
            dispatch({ type: "SET", payload: newQuote });

        } catch (error) {
            
            setloading(false);

        }
    }



    useEffect(() => {

        const getAllTags = async () => {

            try {

                const { data } = await axios.get('https://api.quotable.io/tags');
                settags(data);
                console.log(tags);
            } catch (error) {
                console.log(error);
            }

        }

         getRandomQuote();
        getAllTags();

    }, [])


    return (
        <div className='home'>
            <div style={{ margin: "auto", marginTop: "5rem", width: "fit-content" }}>

                {
                    loading ?
                        <Loader /> :
                        <div>
                            <QuoteBox content={quote && quote.content} showBookmark _id={quote._id} author={quote && quote.author} />

                            <div className='' style={{ marginTop: "3rem" }}>

                                <div>
                                    <select className='tag-list' value={selectedTag} onChange={(e) => handleSelectedTag(e.target.value)} name="" id="">
                                    <option value={null}>select a category</option>
                                        {
                                            tags.map((tag) => {
                                                return (
                                                    <option value={tag.name}>{tag.name}</option>
                                                )


                                            })
                                        }
                                    </select>
                                </div>

                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <button className='next-btn' onClick={getRandomQuote}>Next Quote</button>
                                </div>

                            </div>
                        </div>
                }

            </div>
        </div>
    )
}
