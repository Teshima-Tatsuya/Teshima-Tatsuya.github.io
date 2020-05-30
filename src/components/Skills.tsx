import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

// 言語(string)、年数(int)、レベル(string)
const langs = [
  ["php", 3, "aaa"],
  ["javascipt", 3, "aaa"],
  ["ruby", 3, "aaa"],
  ["python", 3, "aaa"],
  [
    "VBA",
    2,
    "業務用ツールとして、webスクレイピングツールを作成し、WEBテスト自動化等、担当内の工数削減を実現",
  ],
];

const rows = [
  ["PHP", 5, 
  `フレームワーク（FuelPHP,CodeIgniter）を使用し、
  キュレーションサービスのバックエンドを作成可能。また、
  PurePHPを用いてフルスクラッチでSNSを作成した経験あり`
　],
  ["Ruby", 3, 
  `フレームワーク（Ruby on Rails）を使用しキュレーションサービスのバックエンドを作成可能。
  また、Webスクレイピングによる情報収集等も可能`
  ],
  ["JavaScript", 1, 
  `React, jQueryを用いた簡易なWebサイト構築可能。
  また、Ruby on Railsをバックエンドとして開発も経験
  `],
  ["VBA", 3,
  `Seleniumが使用不可能な環境で、社内のWebテスト自動化ツールを作成
  社内の誰もが使用可能となるよう、Excelでミニ言語を作成し、簡易にシナリオ作成を可能とした。
  また、社内向けの定常作業の自動化も多く実装し、全体の工数削減に貢献`
  ],
];
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Skills: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <h2>スキル</h2>
      <pre>整理中です。</pre>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">言語</StyledTableCell>
              <StyledTableCell align="right">経験年数</StyledTableCell>
              <StyledTableCell align="right">レベル</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row[0]}>
                <StyledTableCell align="right">{row[0]}</StyledTableCell>
                <StyledTableCell align="right">{row[1]}</StyledTableCell>
                <StyledTableCell align="right">{row[2]}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Skills;
