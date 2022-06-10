class V1::UsersController < ApplicationController

    def index
        users = User.all
        render(json: users.as_json, status: :ok)
    end
end
