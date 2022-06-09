class V1::UsersController < ApplicationController

    def index
        render(json: {test: "Seeing if things are wired up"})
    end
end
