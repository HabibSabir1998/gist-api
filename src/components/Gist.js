import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";

const Gist = ({ gist }) => (
  <Container>
    <Card>
      <GistDetails>
        <UserInfo>
          <UserImg src={gist.owner.avatar_url} />
          <UserName href={gist?.owner?.html_url}>{gist.owner.login}</UserName>
        </UserInfo>
        <GitInfoGroup>
          <GitInfo href={gist.commits_url}>
            <Octicon name="code" />
            <GitInfoItem>
              {gist.files ? Object.keys(gist.files).length : 0} Files
            </GitInfoItem>
          </GitInfo>
          <GitInfo href={gist.forks_url}>
            <Octicon name="repo-forked" />
            <GitInfoItem>Forks</GitInfoItem>
          </GitInfo>
          <GitInfo href={gist.comments_url}>
            <Octicon name="comment" />
            <GitInfoItem> Comments</GitInfoItem>
          </GitInfo>
          <GitInfo href={gist.owner.starred_url}>
            <Octicon name="star" />
            <GitInfoItem>Stars</GitInfoItem>
          </GitInfo>
        </GitInfoGroup>
      </GistDetails>
      <DateGroup>
        <span>
          Created At: {new Date(gist.created_at).toLocaleDateString()}
        </span>
        <span>
          Last update: {new Date(gist.updated_at).toLocaleDateString()}
        </span>
      </DateGroup>
      <GistDescription>{gist?.description}</GistDescription>
      <FileGroup>
        {gist.files
          ? Object.keys(gist.files).map((file, index) => (
              <File key={index} href={gist?.files[file]?.raw_url}>
                <Octicon name="file" /> {file}
              </File>
            ))
          : null}
      </FileGroup>
    </Card>
  </Container>
);

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 50%;
  padding-bottom: 20px;
  margin-top: 14px;
  border-bottom: 1px solid #f1f1f1;
`;

const DateGroup = styled.div`
  display: flex;
  width: 40%;
  font-size: 11px;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const File = styled.a`
  text-decoration: none;
  font-size: 11px;
  padding-right: 10px;
`;

const FileGroup = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
`;

const GitInfo = styled.a`
  align-items: center;
  justify-content: center;
  font-size: 12px;
  text-decoration: none;
`;

const GitInfoItem = styled.span`
  margin-left: 2px;
`;

const GitInfoGroup = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
`;

const GistDescription = styled.h5`
 font-size: 12px:
 font-weight: 300;
 color: gray;
`;

const GistDetails = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const UserName = styled.a`
  text-decoration: none;
  font-size: 12px;
`;

const UserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;

export default Gist;
