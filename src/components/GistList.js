import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Octicon from "react-octicon";

import Gist from "./Gist";
import { getGistForUser, getPublicGists } from "../services/gistService";
import { addAllGists, getAllGist } from "../redux/features/gistSlice";

const GistList = ({ search }) => {
  const allGitGists = useSelector(getAllGist);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getAllGists() {
      try {
        setLoading(true);
        // if search value exists
        if (search) {
          // get gist from search
          const getGistBySearch = await getGistForUser(search);
          if (getGistBySearch?.status === 200) {
            // dispatch action to add gist
            dispatch(addAllGists(getGistBySearch?.data));
          }
        } else {
          // get all publice gist
          const getallGists = await getPublicGists();
          if (getallGists?.status === 200) {
            // dispatch action to add gist
            dispatch(addAllGists(getallGists?.data));
          }
        }
      } catch (error) {
        dispatch(addAllGists([]));
        console.log({ error });
      } finally {
        setLoading(false);
      }
    }
    getAllGists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div>
      {allGitGists?.length ? (
        allGitGists.map((gist, index) => <Gist key={index} gist={gist} />)
      ) : (
        <NotFound>
          {loading ? <Octicon name="sync" spin mega /> : "Gist not found"}
        </NotFound>
      )}
    </div>
  );
};

const NotFound = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default GistList;
