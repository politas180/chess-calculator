<script>
        $(function() {
            var boardId = 'board';

            // BOARD SETUP
            var board = new ChessBoard(boardId,
                    {
                        draggable: true,
                        dropOffBoard: 'trash',
                        sparePieces: true,
                        onChange: boardOnChange,
                        position: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
                    });
            board.boardId = boardId;
            cnm.utils.extendChessBoard(board, boardId);

            ko.applyBindings(board.model.viewModel, document.getElementById('chessRow'));

            function boardOnChange(oldPos, newPos) {
                console.log("boardPosChange");
                if (board.model) {
                    board.actions.move(newPos, oldPos);
                }
            }
            updatePositionsAndSizes();
            $(window).resize(function() {
                board.resize();
                updatePositionsAndSizes()
            });
            $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function() {
                board.resize();
                updatePositionsAndSizes()
            });
        });
    </script>